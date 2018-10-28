import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundSwapVertElement
 * @class IconRoundSwapVertElement
 * @extends {AoflElement}
 */
class IconRoundSwapVertElement extends AoflElement {
  /**
   * Creates an instance of IconRoundSwapVertElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-swap-vert';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundSwapVertElement.is, IconRoundSwapVertElement);

export default IconRoundSwapVertElement;
