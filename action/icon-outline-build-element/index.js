import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineBuildElement
 * @class IconOutlineBuildElement
 * @extends {AoflElement}
 */
class IconOutlineBuildElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineBuildElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-build';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineBuildElement.is, IconOutlineBuildElement);

export default IconOutlineBuildElement;
