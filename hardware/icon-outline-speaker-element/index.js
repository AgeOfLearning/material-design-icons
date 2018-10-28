import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineSpeakerElement
 * @class IconOutlineSpeakerElement
 * @extends {AoflElement}
 */
class IconOutlineSpeakerElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineSpeakerElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-speaker';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineSpeakerElement.is, IconOutlineSpeakerElement);

export default IconOutlineSpeakerElement;
