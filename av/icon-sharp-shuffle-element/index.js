import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpShuffleElement
 * @class IconSharpShuffleElement
 * @extends {AoflElement}
 */
class IconSharpShuffleElement extends AoflElement {
  /**
   * Creates an instance of IconSharpShuffleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-shuffle';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpShuffleElement.is, IconSharpShuffleElement);

export default IconSharpShuffleElement;
