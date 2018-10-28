import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineLockElement
 * @class IconBaselineLockElement
 * @extends {AoflElement}
 */
class IconBaselineLockElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineLockElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-lock';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineLockElement.is, IconBaselineLockElement);

export default IconBaselineLockElement;
