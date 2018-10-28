import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineExploreOffElement
 * @class IconOutlineExploreOffElement
 * @extends {AoflElement}
 */
class IconOutlineExploreOffElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineExploreOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-explore-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineExploreOffElement.is, IconOutlineExploreOffElement);

export default IconOutlineExploreOffElement;
