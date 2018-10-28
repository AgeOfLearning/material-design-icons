import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpViewAgendaElement
 * @class IconSharpViewAgendaElement
 * @extends {AoflElement}
 */
class IconSharpViewAgendaElement extends AoflElement {
  /**
   * Creates an instance of IconSharpViewAgendaElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-view-agenda';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpViewAgendaElement.is, IconSharpViewAgendaElement);

export default IconSharpViewAgendaElement;
