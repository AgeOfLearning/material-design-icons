import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundLinkElement
 * @class IconRoundLinkElement
 * @extends {AoflElement}
 */
class IconRoundLinkElement extends AoflElement {
  /**
   * Creates an instance of IconRoundLinkElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-link';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundLinkElement.is, IconRoundLinkElement);

export default IconRoundLinkElement;
