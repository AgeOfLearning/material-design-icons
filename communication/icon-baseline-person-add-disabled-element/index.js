import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselinePersonAddDisabledElement
 * @class IconBaselinePersonAddDisabledElement
 * @extends {AoflElement}
 */
class IconBaselinePersonAddDisabledElement extends AoflElement {
  /**
   * Creates an instance of IconBaselinePersonAddDisabledElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-person-add-disabled';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselinePersonAddDisabledElement.is, IconBaselinePersonAddDisabledElement);

export default IconBaselinePersonAddDisabledElement;
