import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineRecentActorsElement
 * @class IconOutlineRecentActorsElement
 * @extends {AoflElement}
 */
class IconOutlineRecentActorsElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineRecentActorsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-recent-actors';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineRecentActorsElement.is, IconOutlineRecentActorsElement);

export default IconOutlineRecentActorsElement;
