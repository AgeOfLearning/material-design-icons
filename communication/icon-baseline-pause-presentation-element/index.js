import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselinePausePresentationElement
 * @class IconBaselinePausePresentationElement
 * @extends {AoflElement}
 */
class IconBaselinePausePresentationElement extends AoflElement {
  /**
   * Creates an instance of IconBaselinePausePresentationElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-pause-presentation';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselinePausePresentationElement.is, IconBaselinePausePresentationElement);

export default IconBaselinePausePresentationElement;
