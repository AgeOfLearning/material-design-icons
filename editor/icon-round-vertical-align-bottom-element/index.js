import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundVerticalAlignBottomElement
 * @class IconRoundVerticalAlignBottomElement
 * @extends {AoflElement}
 */
class IconRoundVerticalAlignBottomElement extends AoflElement {
  /**
   * Creates an instance of IconRoundVerticalAlignBottomElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-vertical-align-bottom';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundVerticalAlignBottomElement.is, IconRoundVerticalAlignBottomElement);

export default IconRoundVerticalAlignBottomElement;
