import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneExploreOffElement
 * @class IconTwotoneExploreOffElement
 * @extends {AoflElement}
 */
class IconTwotoneExploreOffElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneExploreOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-explore-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneExploreOffElement.is, IconTwotoneExploreOffElement);

export default IconTwotoneExploreOffElement;
