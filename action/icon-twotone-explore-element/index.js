import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneExploreElement
 * @class IconTwotoneExploreElement
 * @extends {AoflElement}
 */
class IconTwotoneExploreElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneExploreElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-explore';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneExploreElement.is, IconTwotoneExploreElement);

export default IconTwotoneExploreElement;
