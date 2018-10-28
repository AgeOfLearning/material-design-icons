import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneWatchElement
 * @class IconTwotoneWatchElement
 * @extends {AoflElement}
 */
class IconTwotoneWatchElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneWatchElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-watch';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneWatchElement.is, IconTwotoneWatchElement);

export default IconTwotoneWatchElement;
