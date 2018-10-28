import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpExploreElement
 * @class IconSharpExploreElement
 * @extends {AoflElement}
 */
class IconSharpExploreElement extends AoflElement {
  /**
   * Creates an instance of IconSharpExploreElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-explore';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpExploreElement.is, IconSharpExploreElement);

export default IconSharpExploreElement;
