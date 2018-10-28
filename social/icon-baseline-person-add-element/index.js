import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselinePersonAddElement
 * @class IconBaselinePersonAddElement
 * @extends {AoflElement}
 */
class IconBaselinePersonAddElement extends AoflElement {
  /**
   * Creates an instance of IconBaselinePersonAddElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-person-add';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselinePersonAddElement.is, IconBaselinePersonAddElement);

export default IconBaselinePersonAddElement;
