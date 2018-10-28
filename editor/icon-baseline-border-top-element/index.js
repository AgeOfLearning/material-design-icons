import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineBorderTopElement
 * @class IconBaselineBorderTopElement
 * @extends {AoflElement}
 */
class IconBaselineBorderTopElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineBorderTopElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-border-top';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineBorderTopElement.is, IconBaselineBorderTopElement);

export default IconBaselineBorderTopElement;
