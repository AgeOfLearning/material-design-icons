import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineSpeakerGroupElement
 * @class IconOutlineSpeakerGroupElement
 * @extends {AoflElement}
 */
class IconOutlineSpeakerGroupElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineSpeakerGroupElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-speaker-group';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineSpeakerGroupElement.is, IconOutlineSpeakerGroupElement);

export default IconOutlineSpeakerGroupElement;
