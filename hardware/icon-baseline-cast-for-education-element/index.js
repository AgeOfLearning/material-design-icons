import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineCastForEducationElement
 * @class IconBaselineCastForEducationElement
 * @extends {AoflElement}
 */
class IconBaselineCastForEducationElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineCastForEducationElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-cast-for-education';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineCastForEducationElement.is, IconBaselineCastForEducationElement);

export default IconBaselineCastForEducationElement;
