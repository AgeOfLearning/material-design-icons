import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundContactsElement
 * @class IconRoundContactsElement
 * @extends {AoflElement}
 */
class IconRoundContactsElement extends AoflElement {
  /**
   * Creates an instance of IconRoundContactsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-contacts';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundContactsElement.is, IconRoundContactsElement);

export default IconRoundContactsElement;
