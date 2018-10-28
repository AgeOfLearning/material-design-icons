import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpChildFriendlyElement
 * @class IconSharpChildFriendlyElement
 * @extends {AoflElement}
 */
class IconSharpChildFriendlyElement extends AoflElement {
  /**
   * Creates an instance of IconSharpChildFriendlyElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-child-friendly';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpChildFriendlyElement.is, IconSharpChildFriendlyElement);

export default IconSharpChildFriendlyElement;
