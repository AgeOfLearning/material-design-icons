import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineCancelPresentationElement
 * @class IconBaselineCancelPresentationElement
 * @extends {AoflElement}
 */
class IconBaselineCancelPresentationElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineCancelPresentationElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-cancel-presentation';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineCancelPresentationElement.is, IconBaselineCancelPresentationElement);

export default IconBaselineCancelPresentationElement;
