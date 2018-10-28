import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineSpaceBarElement
 * @class IconBaselineSpaceBarElement
 * @extends {AoflElement}
 */
class IconBaselineSpaceBarElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineSpaceBarElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-space-bar';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineSpaceBarElement.is, IconBaselineSpaceBarElement);

export default IconBaselineSpaceBarElement;
