import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundOpenInBrowserElement
 * @class IconRoundOpenInBrowserElement
 * @extends {AoflElement}
 */
class IconRoundOpenInBrowserElement extends AoflElement {
  /**
   * Creates an instance of IconRoundOpenInBrowserElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-open-in-browser';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundOpenInBrowserElement.is, IconRoundOpenInBrowserElement);

export default IconRoundOpenInBrowserElement;
