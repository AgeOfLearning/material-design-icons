import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundShuffleElement
 * @class IconRoundShuffleElement
 * @extends {AoflElement}
 */
class IconRoundShuffleElement extends AoflElement {
  /**
   * Creates an instance of IconRoundShuffleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-shuffle';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundShuffleElement.is, IconRoundShuffleElement);

export default IconRoundShuffleElement;
