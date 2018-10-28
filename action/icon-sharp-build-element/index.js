import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpBuildElement
 * @class IconSharpBuildElement
 * @extends {AoflElement}
 */
class IconSharpBuildElement extends AoflElement {
  /**
   * Creates an instance of IconSharpBuildElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-build';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpBuildElement.is, IconSharpBuildElement);

export default IconSharpBuildElement;
