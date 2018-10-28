import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpExploreOffElement
 * @class IconSharpExploreOffElement
 * @extends {AoflElement}
 */
class IconSharpExploreOffElement extends AoflElement {
  /**
   * Creates an instance of IconSharpExploreOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-explore-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpExploreOffElement.is, IconSharpExploreOffElement);

export default IconSharpExploreOffElement;
