import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineAssistantPhotoElement
 * @class IconBaselineAssistantPhotoElement
 * @extends {AoflElement}
 */
class IconBaselineAssistantPhotoElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineAssistantPhotoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-assistant-photo';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineAssistantPhotoElement.is, IconBaselineAssistantPhotoElement);

export default IconBaselineAssistantPhotoElement;
