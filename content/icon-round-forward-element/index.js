import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundForwardElement
 * @class IconRoundForwardElement
 * @extends {AoflElement}
 */
class IconRoundForwardElement extends AoflElement {
  /**
   * Creates an instance of IconRoundForwardElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-forward';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundForwardElement.is, IconRoundForwardElement);

export default IconRoundForwardElement;
