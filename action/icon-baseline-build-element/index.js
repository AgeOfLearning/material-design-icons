import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineBuildElement
 * @class IconBaselineBuildElement
 * @extends {AoflElement}
 */
class IconBaselineBuildElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineBuildElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-build';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineBuildElement.is, IconBaselineBuildElement);

export default IconBaselineBuildElement;
