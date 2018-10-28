import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineSpeakerElement
 * @class IconBaselineSpeakerElement
 * @extends {AoflElement}
 */
class IconBaselineSpeakerElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineSpeakerElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-speaker';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineSpeakerElement.is, IconBaselineSpeakerElement);

export default IconBaselineSpeakerElement;
