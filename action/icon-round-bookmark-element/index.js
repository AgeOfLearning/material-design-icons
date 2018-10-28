import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundBookmarkElement
 * @class IconRoundBookmarkElement
 * @extends {AoflElement}
 */
class IconRoundBookmarkElement extends AoflElement {
  /**
   * Creates an instance of IconRoundBookmarkElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-bookmark';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundBookmarkElement.is, IconRoundBookmarkElement);

export default IconRoundBookmarkElement;
