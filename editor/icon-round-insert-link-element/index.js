import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundInsertLinkElement
 * @class IconRoundInsertLinkElement
 * @extends {AoflElement}
 */
class IconRoundInsertLinkElement extends AoflElement {
  /**
   * Creates an instance of IconRoundInsertLinkElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-insert-link';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundInsertLinkElement.is, IconRoundInsertLinkElement);

export default IconRoundInsertLinkElement;
