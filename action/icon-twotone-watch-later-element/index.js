import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneWatchLaterElement
 * @class IconTwotoneWatchLaterElement
 * @extends {AoflElement}
 */
class IconTwotoneWatchLaterElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneWatchLaterElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-watch-later';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneWatchLaterElement.is, IconTwotoneWatchLaterElement);

export default IconTwotoneWatchLaterElement;
