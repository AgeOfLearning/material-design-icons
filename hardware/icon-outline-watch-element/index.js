import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineWatchElement
 * @class IconOutlineWatchElement
 * @extends {AoflElement}
 */
class IconOutlineWatchElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineWatchElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-watch';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineWatchElement.is, IconOutlineWatchElement);

export default IconOutlineWatchElement;
