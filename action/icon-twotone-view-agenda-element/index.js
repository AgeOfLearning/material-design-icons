import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneViewAgendaElement
 * @class IconTwotoneViewAgendaElement
 * @extends {AoflElement}
 */
class IconTwotoneViewAgendaElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneViewAgendaElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-view-agenda';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneViewAgendaElement.is, IconTwotoneViewAgendaElement);

export default IconTwotoneViewAgendaElement;
