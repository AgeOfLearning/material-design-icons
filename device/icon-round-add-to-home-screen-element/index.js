import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundAddToHomeScreenElement
 * @class IconRoundAddToHomeScreenElement
 * @extends {AoflElement}
 */
class IconRoundAddToHomeScreenElement extends AoflElement {
  /**
   * Creates an instance of IconRoundAddToHomeScreenElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-add-to-home-screen';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundAddToHomeScreenElement.is, IconRoundAddToHomeScreenElement);

export default IconRoundAddToHomeScreenElement;
