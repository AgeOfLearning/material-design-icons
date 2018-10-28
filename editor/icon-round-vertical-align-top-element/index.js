import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundVerticalAlignTopElement
 * @class IconRoundVerticalAlignTopElement
 * @extends {AoflElement}
 */
class IconRoundVerticalAlignTopElement extends AoflElement {
  /**
   * Creates an instance of IconRoundVerticalAlignTopElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-vertical-align-top';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundVerticalAlignTopElement.is, IconRoundVerticalAlignTopElement);

export default IconRoundVerticalAlignTopElement;
