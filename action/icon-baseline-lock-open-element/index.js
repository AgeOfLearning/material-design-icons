import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineLockOpenElement
 * @class IconBaselineLockOpenElement
 * @extends {AoflElement}
 */
class IconBaselineLockOpenElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineLockOpenElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-lock-open';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineLockOpenElement.is, IconBaselineLockOpenElement);

export default IconBaselineLockOpenElement;
