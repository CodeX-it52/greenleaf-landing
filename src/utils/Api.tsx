interface SendInfoProps {
    name: string;
    phone: string;
    email: string;
    text: string;
}

class Api {
    private options: { baseUrl: string; headers: Record<string, string> };

    constructor(options: { baseUrl: string; headers: Record<string, string> }) {
        this.options = options;
    }

    _getResponseData(res: Response): Promise<JSON> {
        if (!res.ok) {
            return Promise.reject(res.status)
        }
        return res.json()
    }

    sendInfo({email, name, phone, text}: SendInfoProps) {
        return fetch(this.options?.baseUrl, {
            method: "POST",
            headers: this.options?.headers,
            body: JSON.stringify({
                name,
                phone,
                email,
                message: text,
            })
        }).then((res: Response) => {
                return this._getResponseData(res);
            })

    }
}

export const api = new Api({
    baseUrl: "https://codex-it.ru/api/user/login",
    headers: {
        "Content-Type": "application/json",
    }
})