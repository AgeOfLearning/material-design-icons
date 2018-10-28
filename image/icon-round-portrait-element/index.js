import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundPortraitElement
 * @class IconRoundPortraitElement
 * @extends {AoflElement}
 */
class IconRoundPortraitElement extends AoflElement {
  /**
   * Creates an instance of IconRoundPortraitElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-portrait';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundPortraitElement.is, IconRoundPortraitElement);

export default IconRoundPortraitElement;
