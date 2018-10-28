import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundRowingElement
 * @class IconRoundRowingElement
 * @extends {AoflElement}
 */
class IconRoundRowingElement extends AoflElement {
  /**
   * Creates an instance of IconRoundRowingElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-rowing';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundRowingElement.is, IconRoundRowingElement);

export default IconRoundRowingElement;
