import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineViewAgendaElement
 * @class IconOutlineViewAgendaElement
 * @extends {AoflElement}
 */
class IconOutlineViewAgendaElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineViewAgendaElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-view-agenda';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineViewAgendaElement.is, IconOutlineViewAgendaElement);

export default IconOutlineViewAgendaElement;
