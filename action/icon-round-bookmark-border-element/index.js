import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundBookmarkBorderElement
 * @class IconRoundBookmarkBorderElement
 * @extends {AoflElement}
 */
class IconRoundBookmarkBorderElement extends AoflElement {
  /**
   * Creates an instance of IconRoundBookmarkBorderElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-bookmark-border';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundBookmarkBorderElement.is, IconRoundBookmarkBorderElement);

export default IconRoundBookmarkBorderElement;
