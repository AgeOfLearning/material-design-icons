import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineBorderColorElement
 * @class IconBaselineBorderColorElement
 * @extends {AoflElement}
 */
class IconBaselineBorderColorElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineBorderColorElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-border-color';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineBorderColorElement.is, IconBaselineBorderColorElement);

export default IconBaselineBorderColorElement;
