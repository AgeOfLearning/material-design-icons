import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineExploreElement
 * @class IconOutlineExploreElement
 * @extends {AoflElement}
 */
class IconOutlineExploreElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineExploreElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-explore';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineExploreElement.is, IconOutlineExploreElement);

export default IconOutlineExploreElement;
