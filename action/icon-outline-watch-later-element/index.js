import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineWatchLaterElement
 * @class IconOutlineWatchLaterElement
 * @extends {AoflElement}
 */
class IconOutlineWatchLaterElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineWatchLaterElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-watch-later';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineWatchLaterElement.is, IconOutlineWatchLaterElement);

export default IconOutlineWatchLaterElement;
