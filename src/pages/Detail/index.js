import React,{Component} from 'react';
import Header from '../../components/Header';
import api from '../../services/api';

import './index.css';

export default class Detail extends Component {
    state = {
        dados : {}
    }

    async loadData(){
        const {id} = this.props.match.params;
        const response = await api.get(`/user/${id}`);
        this.setState({dados : response.data});
    }

    componentDidMount(){
        this.loadData();
    }

    render(){
        return(
        <div>
            <Header/>
            <div className='detail-container'>
                <div className='card'>
                    <img id='avatar' src={this.state.dados.avatar_url} alt=''/>
                    <div id='info'>
                        <p><span>Nome:</span> {this.state.dados.name}</p>
                        <p><span>Empresa:</span> {this.state.dados.company}</p>
                        <p><span>Biografia:</span> {this.state.dados.bio}</p>
                        <p><span>Quantidade de repositórios:</span> {this.state.dados.public_repos}</p>
                        <p><span>Quantidade de seguidores:</span> {this.state.dados.followers}</p>
                        <p><span>Sexo:</span>{this.state.dados.sexo}</p>
                        <p><span>Linguagem:</span> {this.state.dados.linguagem}</p>
                        <p><span>Experiencia:</span> {this.state.dados.experiencia}</p>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}