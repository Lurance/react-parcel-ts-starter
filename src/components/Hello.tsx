import * as React from 'react'
import * as style from './Hello.css'

import logo from '../static/favicon.ico'

export interface HelloProps {
    compiler: string;
    framework: string;
}

export class Hello extends React.Component<HelloProps, {}> {
    public render() {
        return (
            <section>
                <h1>Hello from <span className={style.helloCompiler}>{this.props.compiler}</span> and <span className={style.helloFramework}>{this.props.framework}</span></h1>
                <img src={logo} />
            </section>
        )
    }
}