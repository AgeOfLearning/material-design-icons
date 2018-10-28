import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundBlockElement
 * @class IconRoundBlockElement
 * @extends {AoflElement}
 */
class IconRoundBlockElement extends AoflElement {
  /**
   * Creates an instance of IconRoundBlockElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-block';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundBlockElement.is, IconRoundBlockElement);

export default IconRoundBlockElement;
