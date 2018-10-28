import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundVerticalAlignCenterElement
 * @class IconRoundVerticalAlignCenterElement
 * @extends {AoflElement}
 */
class IconRoundVerticalAlignCenterElement extends AoflElement {
  /**
   * Creates an instance of IconRoundVerticalAlignCenterElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-vertical-align-center';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundVerticalAlignCenterElement.is, IconRoundVerticalAlignCenterElement);

export default IconRoundVerticalAlignCenterElement;
