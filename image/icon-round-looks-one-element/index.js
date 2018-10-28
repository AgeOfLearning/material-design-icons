import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundLooksOneElement
 * @class IconRoundLooksOneElement
 * @extends {AoflElement}
 */
class IconRoundLooksOneElement extends AoflElement {
  /**
   * Creates an instance of IconRoundLooksOneElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-looks-one';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundLooksOneElement.is, IconRoundLooksOneElement);

export default IconRoundLooksOneElement;
